import { BrowserRouter, Routes as BrowserRoutes, Route } from 'react-router-dom'
import { AuthGate } from '~/components/AuthGate'
import { Dashboard } from '~/pages/Dashboard'
import { Login } from '~/pages/Login'
import { NotFound } from '~/pages/NotFound'
import { Unauthorized } from '~/pages/Unauthorized'
import { SessionExpired } from '~/pages/SessionExpired'

export const Routes = () => {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <AuthGate>
              <Dashboard />
            </AuthGate>
          }
        />
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='/session-expired' element={<SessionExpired />} />
        <Route path='*' element={<NotFound />} />
      </BrowserRoutes>
    </BrowserRouter>
  )
}
