const content = [
  {
    title: "Title",
    logo: "",
    content: "Content",
  },
  {
    title: "Title",
    logo: "",
    content: "Content",
  },
  {
    title: "Title",
    logo: "",
    content: "Content",
  },
];

export const Info = () => {
  return (
    <div className="px-ps md:px-pm lg:px-pl bg-slate-800 py-8 flex flex-col items-center gap-4">
      <h2>hook for scroll</h2>
      <ul className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
        {content.map((content, i) => {
          return (
            <li key={content.title + i}>
              <div>
                <h3>{content.title}</h3>
                <p>{content.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
