import getInstance from "../utils/request-utils"

export const getCars = () => {
  const instance = getInstance();
  return instance.get("/api/car");
}