import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

const InfiniteScrollTableWithLibrary: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=20&seed=abc`
      );
      const responseData = await response.json();

      if (responseData.results && responseData.results.length > 0) {
        const formattedUsers = responseData.results.map(
          (user: any, index: number) => ({
            id: (page - 1) * 20 + index + 1,
            name: `${user.name.first} ${user.name.last}`,
            username: user.login.username,
            email: user.email,
            phone: user.phone,
            website: user.login.username + ".com",
          })
        );

        setUsers((prevUsers) => [...prevUsers, ...formattedUsers]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div id='scrollableDiv' style={{ height: "100%", overflow: "auto" }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "20px",
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          padding: "10px",
          zIndex: 1,
        }}
      >
        Users Table with react-infinite-scroll-component
      </h3>

      <InfiniteScroll
        dataLength={users.length}
        next={fetchUsers}
        hasMore={hasMore}
        loader={
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div className='loader'>Loading more users...</div>
          </div>
        }
        endMessage={
          <div style={{ textAlign: "center", padding: "20px" }}>
            <b>No more users to load!</b>
          </div>
        }
        scrollableTarget='scrollableDiv'
        scrollThreshold={0.8}
        style={{ overflow: "visible" }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                ID
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Username
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Phone
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                }}
              >
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.id}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.name}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.username}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.email}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.phone}
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.website}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollTableWithLibrary;
