import {
  FETCH_BODY_PARAMETERS,
  FETCH_PARAMETERS,
  IActionFetchResponse,
  IActionFetchResult,
} from '@shared/api/api.types';
import { API_URL } from '@shared/constants/env';

/**
 * Функция для выполнения запросов к API
 *
 * @template T
 * @param {string} method
 * @param {T} params
 */
export const actionFetch = async <T, D>(method: string, params: T): Promise<IActionFetchResult<D>> => {
  const fetchResult: IActionFetchResult<D> = {
    isSuccessful: false,
    message: '',
  };

  try {
    const response = await fetch(`${API_URL}`, {
      ...FETCH_PARAMETERS,
      body: JSON.stringify({
        ...FETCH_BODY_PARAMETERS,
        method,
        params,
      }),
    });

    if (response.ok) {
      const data: IActionFetchResponse<D> = await response.json();

      if (data && data.error) {
        fetchResult.message = data.error.message;
      } else {
        fetchResult.isSuccessful = true;

        if ('result' in data) {
          fetchResult.data = data.result;
        }
      }
    }
  } catch (error) {
    console.log('@actionFetch', error);
  }

  return fetchResult;
};
