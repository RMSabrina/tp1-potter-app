// components/OfflineBanner/OfflineBanner.jsx
import { useOnlineStatus } from '../../hooks/useOnlineStatus'
import './OfflineBanner.css'

export function OfflineBanner() {
  const isOnline = useOnlineStatus()

  if (isOnline) return null

  return (
    <div className="offline-banner" role="status">
      📜 Sin conexión - mostrando los últimos resultados guardados en el pergamino
    </div>
  )
}