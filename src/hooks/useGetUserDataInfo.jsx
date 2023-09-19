// import { useContext, useEffect } from "react"
// import { ModalsContext } from "../context/ModalsContext"
// import { SingContext } from "../context/SingContext"
// import api from "../services/api"

// export default function useGetUserDataInfo() {
//   const { value } = useContext(SingContext)
//   const { setName, setEmail } = useContext(ModalsContext)

//   async function useUserGetData() {
//     try {
//       const { data } = await api.get("/users/profile", {
//         headers: {
//           Authorization: `Bearer ${value}`
//         }
//       })

//       setName(data.name)
//       setEmail(data.email)
//     } catch (error) {
//       console.log(error.response.data)
//     }
//   }

//   useEffect(() => {
//     useUserGetData()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])


//   return {
//     useUserGetData
//   }
// }
