// Returns First and Last name initials
export const getInitials = (name: string) => {
  const str = name.trim().split(' ')
  return str
    .map((item) => item[0].toUpperCase())
    .slice(0, 2)
    .join('')
}
