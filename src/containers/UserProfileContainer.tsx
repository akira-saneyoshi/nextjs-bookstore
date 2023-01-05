import type { ApiContext, User } from 'types'
import UserProfile from 'components/organisms/UserProfile'
import useUser from 'services/users/use-user'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface UserProfileContainerProps {
  /**
   * ユーザID
   */
  userId: number
  /**
   * 初期で表示するユーザ
   */
  user?: User
}

/**
 * ユーザプロファイルコンテナ
 */
const UserProfileContainer = ({ userId, user }: UserProfileContainerProps) => {
  // 細心のユーザ情報を取得し、更新があった場合には
  // initialで指定されているデータを上書きする
  const { user: u } = useUser(context, { id: userId, initial: user })

  if (!u) return <div>Loading...</div>

  return (
    <UserProfile
      username={`${u.username} (${u.displayName})`}
      profileImageUrl={u.profileImageUrl}
      numberOfProducts={100}
      description={u.description}
    />
  )
}

export default UserProfileContainer
