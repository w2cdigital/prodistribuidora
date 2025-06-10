import axios from "axios"
import { useQuery } from "react-query"
import { stateList } from "./stateList"
import { useMemo } from "react"

export function useCitytList({ country = "Brazil", state = null, uf = null }) {
  const searchValue = useMemo(
    () => state || stateList.find((s) => s.state_code === uf)?.name,
    [uf, state],
  )
  const cityList = useQuery({
    queryKey: ["cityList", searchValue],
    queryFn: () => {
      return axios.get(
        `https://countriesnow.space/api/v0.1/countries/state/cities/q?country=${country}&state=${searchValue}`,
      )
    },
  })
  return cityList
}
