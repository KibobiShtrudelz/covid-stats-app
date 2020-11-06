const paths = {
    root: '/',
    dashboard: '/dashboard',
    selectedCountry: name => `/dashboard/${name}`,
    modalUrl: name => `/dashboard/${name}/modal`
}

export default paths
