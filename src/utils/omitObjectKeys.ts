export function omitObjectKeys(keys: string[], obj) {
  const copyObj = { ...obj }
  if (!keys.length) return obj
  for (const key of keys) {
    delete copyObj[key]
  }
  return copyObj
}
