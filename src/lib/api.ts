import axios from "axios";

export type defaultParams = Record<string, unknown>

const localhost = true

const api = axios.create({
  baseURL: localhost ? "http://localhost:3000/api" : ""
})

const response = (data: defaultParams, status: number) => {
  if (data?.error || !(status >= 200 && status < 300)) {
    return {
      error: data?.error || "Something went wrong"
    }
  }
  return data
}

export async function get(endpoint: string, params?: defaultParams) {
  const { data, status } = await api.get(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
    params
  })

  return response(data, status) as defaultParams | defaultParams[]
}

export async function post(endpoint: string, dataParams: defaultParams, params: defaultParams) {
  const { data, status } = await api.post(endpoint, dataParams, {
    headers: {
      "Content-Type": "application/json"
    },
    params
  })
  return response(data, status)
}
