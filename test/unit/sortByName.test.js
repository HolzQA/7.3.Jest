const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Властелин Колец",
      ])
    ).toEqual([
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер"
    ]);
  });
});
