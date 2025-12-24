import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { ErrorBoundary } from './components/ui'
import { 
  Homepage, 
  Analytics, 
  Calendar, 
  Tasks, 
  Documents, 
  Users, 
  Folder, 
  Box, 
  Settings, 
  Mail, 
  Help, 
  Profile 
} from './pages'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/users" element={<Users />} />
            <Route path="/folder" element={<Folder />} />
            <Route path="/box" element={<Box />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                  <p className="text-gray-600 mb-4">Page not found</p>
                  <a href="/" className="text-blue-500 hover:text-blue-600">
                    Go back home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App

