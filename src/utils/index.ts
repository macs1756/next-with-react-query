
export const urlIdToString = (id: string | string[]) => {
  return Array.isArray(id) ? id[0] : id;
}