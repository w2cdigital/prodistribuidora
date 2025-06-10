export async function SSRrequest<T = any>(request) {
  let data, err
  try {
    await request().then((res) => (data = res.data))
  } catch (e) {
    err = {
      status: e?.response?.status,
      code: e?.code,
      name: e?.name,
      response: e?.response?.data,
      message: e?.message,
    }
  }
  return { data: data as T, err }
}
