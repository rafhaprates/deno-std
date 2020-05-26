const getHello = ({response }: {response: any}) => {
  response.body = "Hello Word"
}

export { getHello }