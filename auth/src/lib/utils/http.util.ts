// Serialize query params
export const serializeHttpQueyParams = (obj: any): string => {
  return new URLSearchParams(obj).toString()
}