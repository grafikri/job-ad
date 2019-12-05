/**
 * This state is used to show post detail
 */
const state = {
  jobId: "199A9ED66BFE4CF593DBDF5402F1702A",
  positionName: "Jandarma Bölge Komutanı",
  companyName: "Vosyoyvsyvosyv",
  durationDay: 0,
  durationDayText: "Taze çıktı!",
  imageUrl: "https://localhost/bluecollar/company/job/Default/6.jpg",
  countryCode: "TR",
  countryName: "Turkey",
  cityName: "İstanbul",
  townName: "Ümraniye",
  address:
    "Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey",
  postalCode: 34768,
  hasLatitude: true,
  hasLongitude: true,
  latitude: 41.0266502,
  longitude: 29.1157803,
  description: "syovsvyosvyoyvsoby",
  status: 1,
  contactPhone: {
    countryCallingCode: "+90",
    areaCode: "879",
    number: "9797979"
  }
}

const getters = {
  purePost: state => {
    return {
      jobTitle: state.positionName,
      company: state.companyName
    }
  }
}

export default {
  namespaced: true,
  getters,
  state
}
