export const BaseUrl = import.meta.env.VITE_API_URL;

export const SummaryApi = {
  fromData: {
    url: "/api/from-data",
    method: "post",
  },

  get_fromData: {
    url: "/api/from-data",
    method: "get",
  },
  
  admin_login : {
    url : '/api/admin/login',
    method : 'post'
  }
};