import { memo, useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'
import { type StatCard as StatCardType } from '../../constants/dashboardData'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

interface StatCardProps {
  stat: StatCardType
}

const StatCard = memo(function StatCard({ stat }: StatCardProps) {
  // Memoize chart data generation to prevent recreation on every render
  const chartData = useMemo(() => {
    // Generate sine wave data that matches the exact wave patterns in the attached image
    const generateSineWave = (amplitude: number, frequency: number, phase: number, offset: number, trend: number) => {
      const points = 24 // More points for smoother curves
      const data = []
      
      for (let i = 0; i < points; i++) {
        const x = (i / (points - 1)) * Math.PI * frequency
        const sineValue = Math.sin(x + phase) * amplitude
        const trendValue = (i / (points - 1)) * trend
        const value = offset + sineValue + trendValue
        data.push(Math.max(0, value)) // Ensure no negative values
      }
      
      return data
    }

    const chartConfigs = {
      income: {
        // Purple sine wave - exactly 2 complete sine waves with upward trend
        data: generateSineWave(8, 2.0, 0, 50, 25), // frequency 2.0 = exactly 2 complete waves
        color: '#8B5CF6'
      },
      leads: {
        // Blue sine wave - exactly 2 complete sine waves 
        data: generateSineWave(15, 2.0, 0, 25, 15), // frequency 2.0 = exactly 2 complete waves
        color: '#60A5FA'
      },
      conversion: {
        // Red/coral sine wave - exactly 2 complete sine waves with downward trend
        data: generateSineWave(10, 2.0, 0, 60, -25), // frequency 2.0 = exactly 2 complete waves
        color: '#F87171'
      }
    }

    const config = chartConfigs[stat.id as keyof typeof chartConfigs] || chartConfigs.income
    
    return {
      labels: Array.from({ length: config.data.length }, () => ''),
      datasets: [
        {
          data: config.data,
          borderColor: config.color,
          backgroundColor: 'transparent',
          borderWidth: 3, // Slightly thicker line to match image
          fill: false, // Remove the fill/shadow area
          tension: 0.7, // Higher tension for smoother curves
          pointRadius: config.data.map((_, index) => index === Math.floor(config.data.length / 2) ? 3 : 0), // Only show dot in the middle
          pointHoverRadius: config.data.map((_, index) => index === Math.floor(config.data.length / 2) ? 5 : 0),
          pointBackgroundColor: config.color,
          pointBorderColor: '#ffffff',
          pointBorderWidth: 1,
        },
      ],
    }
  }, [stat.id]) // Only regenerate when stat.id changes

  // Remove the old getChartData function since it's now memoized above

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderCapStyle: 'round' as const,
        borderJoinStyle: 'round' as const,
      },
    },
    interaction: {
      intersect: false,
    },
    animation: {
      duration: 0, // Disable animation for better performance
    },
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100">
      {/* Content container with responsive flex layout */}
      <div className="flex items-center justify-between gap-4 sm:gap-6">
        {/* Left side - Value and Label */}
        <div className="flex-1 min-w-0">
          <div className="mb-1 sm:mb-2">
            <p className="text-2xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 leading-none">
              {stat.value}
            </p>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            {stat.label}
          </p>
        </div>
        
        {/* Right side - Responsive Mini Chart - Better mobile sizing */}
        <div className="flex-shrink-0 w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 lg:w-32 lg:h-14 xl:w-36 xl:h-16">
          <Line 
            data={chartData} 
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  )
})

export default StatCard