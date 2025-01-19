
const MyTeam = () => {
    const teamMembers = [
      {
        id: 1,
        name: 'John Doe',
        type: 'admin', 
        image: 'https://i.ibb.co.com/jkzcjy9/team-4.jpg', 
      },
      {
        id: 2,
        name: 'Jane Smith',
        type: 'employee',
        image: 'https://i.ibb.co.com/qDjFzqV/team-1.jpg',
      },
      {
        id: 3,
        name: 'Sara Lee',
        type: 'employee',
        image: 'https://i.ibb.co.com/G5JSmMf/team-2.jpg',
      },
      {
        id: 4,
        name: 'Mike Johnson',
        type: 'admin',
        image: 'https://i.ibb.co.com/7VYTj31/team-3.jpg',
      },
    ];
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">My Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="flex justify-center items-center text-gray-600">
                  {member.type === 'admin' ? (
                    <span className="text-yellow-500 text-xl mr-2">👑</span>
                  ) : (
                    <span className="text-gray-500 text-xl mr-2">💼</span>
                  )}
                  <span>{member.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyTeam;