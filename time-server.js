const PORT = process.argv[2];

const net = require("net");
const server = net.createServer((socket) => {
  // Socket logic here?
  const date = new Date();
  const format = (d) => (d < 10 ? "0" + d : d);
  const formattedDate = `${date.getFullYear()}-${format(
    date.getMonth() + 1
  )}-${format(date.getDate())} ${format(date.getHours())}:${format(
    date.getMinutes()
  )}${"\n"}`;
  socket.end(formattedDate);
});

server.listen(PORT);
