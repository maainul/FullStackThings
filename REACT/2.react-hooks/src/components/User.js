import useFetch from "../hooks/useFetch";

const User = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );
  if (loading) {
    return <h1>Loading .....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>Fetch Hook Example</h1>
      {data.map((user) => (
        <h6 key={user.id}>{user.name}</h6>
      ))}
    </>
  );
};

export default User;
