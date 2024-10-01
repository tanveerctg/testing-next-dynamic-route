import React from "react";

const page = ({ params }: { params: { book: string } }) => {
  const parms = params.book;
  return <div>{parms}</div>;
};

export default page;
