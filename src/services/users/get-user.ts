import type { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type GetUserParams = {
  /**
   * ユーザID
   */
  id: number
}

/**
 * ユーザAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザ
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
   // ユーザAPI
   //サンプルレスポンス
  {
    "id": "1",
    "username": "Akira",
    "displayName": "Akira Saneyoshi",
    "email": "saneyoshi@example.com",
    "profileImageUrl": "/users/1.png",
    "discription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
   */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    },
  )
}

export default getUser
