import { systemRepo } from '../common/repos';
import { DbInfo, SystemInfo } from '../common/repos/system'

export default async function() : Promise<SystemHealth> {
  const systemInfo = await systemRepo.get()
  const dbInfo = await systemRepo.getDbInfo()

  return {
    db: {
      ...systemInfo,
      ...dbInfo
    }
  }
}

interface SystemHealth {
  db:DatabaseHealth
}

type DatabaseHealth = SystemInfo | DbInfo