export default function Stats({ list }) {
  if (!list.length)
    return (
      <footer className="stats">
        <em>Start adding items to your list! 😊</em>
      </footer>
    );

  const numberList = list.length;
  const numberPacked = list.filter((item) => item.packed).length;
  const percentage = Math.round((numberPacked / numberList) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You packed every item on your list!`
          : `🎒You have ${numberList} items on your list, and you already packed ${percentage} %`}
      </em>
    </footer>
  );
}
