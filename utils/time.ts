export const wait = (seconds: any) => {
  return new Promise((resolve: any, reject) =>
    setTimeout(() => resolve(), seconds * 1000)
  )
}
