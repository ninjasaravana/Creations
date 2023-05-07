import React, { useCallback, useState } from "react";
import "./List.css";

const List: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [items, setItem] = useState<string[]>([]);

  const addList = useCallback((e: any) => {
    setData(e.target.value);
    return e.target.value;
  }, []);

  const addItem = useCallback(() => {
    setItem((d: string[]) => [...d, data]);
    setData("");
  }, [data]);

  const deleteItem = useCallback(
    (index: number) => {
      const filteredList = items.filter((item, idx) => index !== idx);
      setItem(filteredList);
    },
    [items]
  );

  return (
    <div className='parent'>
      <div className='head'>
        <h2>List Render</h2>
        <div className='inputArea'>
          <input
            placeholder='Eg : Apple'
            name='Add item'
            type='text'
            value={data}
            onChange={(e) => addList(e)}
            maxLength={50}
          />
          <button className='addButton' onClick={addItem}>
            Add
          </button>
        </div>
        <div className='listArea'>
          {items.length ? (
            items.map((value, idx) => {
              return (
                <div className='card' key={idx}>
                  <span className='label'>{value}</span>
                  <img
                    className='closeButton'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAYFBMVEX///8AAAD8/Pzw8PB0dHS8vLwEBATt7e0zMzNVVVVtbW319fXFxcX5+fl3d3elpaXi4uKysrLNzc1GRkYfHx9aWlqXl5cqKiqRkZGDg4MVFRVmZmZ9fX3Y2NhLS0udnZ1aHKdhAAAEJklEQVR4nO1baZerIAylSBe3VlttR51O//+/HLcAjqjg0ua9w/00Z0C8JCEJMSXEwsLCwsLCwsKC+k4Jn37m7f7xGWSsuJ1q3AqWBc+j/04GTpC5p10PJzcLnPcwOMZp//27A/yRxsetGYTXIlFQ6CApruGGFPzYrXd9GGbQjLnxZuaxf0wJQeCx34RCcNOnUOEWrE7heDajUOG8sonuT9IBAJtIUu+1r/Eq0qQdErPKM7umTsJveYP1a9J78Mf2/OCe8mHA92rnJHK7Ys6L2FE6aurERd6d60brcLjyQ3Gotpm/RteNXnk7scHjugaHoKOI/DLpmJ1L3lHKCqckloWbfJUyn3qinPDVcavxehzKvXnaCo4KWRgLWQTyji4mT17kJxdp5CotdDO080j2sAusM5LOBTMOST6Tzsjsk0ol//A9ZwHJx7lzM0BpDSNzELgs3EUZLxZz6LCYFUeOp6W7qCCkeZoTU0XsZvM5EML4Mmfzh+F0HnY/i1I1/4efEfNzKk75wjgYCU9j+qiwytlGCRDGaWibfuOmyjzJW8qBEA9ysYeZYmMwiHyFpCTKwSyMIlnIfeXXcg5lZOd+0yTb44ErX4MDITznMzkgxZhVRtcRFakHL6DdQp/DERKjXFF5CJJdkg09mZWDiuTBB1Ek+m6Tm+WrPxbVBBntp3nlv2r3mChk8TI3Tbj7q47GtaHnKUIz9ZpXKRQfgShSXQ5Okx+qNVhLoso3+0Ne85xKEq2VlcO6VRSeWCpll7UpLOsk3rQNVeWQ0mB4wqybbmbwgJq1t1NpBHQx4GIdWHPQprvwwVOl6pSMeu2WmSwJ1gpIZSzVONiZq+e6eTZzH5gQ8he2GqGteCpiQz7x3i6qmds8J9RHhUZ4usOELgYyWm5oTy0SfPqQ4DgL2HgI6dMwB+KbWSbY5WNkjtAILTGpiwrghfUsE7Y14leosM6zyEY9hRsVAMvUy1gheo2lM1RwZUysPnbDAQ1qxbAQsktF4OjwYNLF+8+BVeHVTr3p5BQ+nNDxjJCSEPbWyC2cqFxA1nrScRSOHonqlVJZ8TxZPeEkdKKHLonqrfxmw6YLOP8viU3VgcIwURxR7qzGvMoMZ6WzrAAKtw0BLBmZMyOAQRFOL4ChCOUokhoU6R2KRBdFyo/j8uOAK/zkNRDFhRhHaUAqkvQHZxRJ6JwiSanBlvi65SLd6NUAReEMRQkRRTEVR1kZRYEdx6cGHB9dUHx+wvEhDsUnSRwfZ3F8pkbxwR5H6wKOJo4/7SzFZ9pZFI09k1i/sQdHixOOZi+9trfmTrpd2xuOBkDSa4Vs/pRaIb22FVKisHYrJMHRFEpQtMdWQNAoTHC0TBMUzeM1pDZ6SSLvbKNv4A//oOCtP2z4/E8rBNofmWxuAxYWFhYWFhYW/wB+AakgONW0xd2JAAAAAElFTkSuQmCC'
                    alt='close'
                    onClick={() => deleteItem(idx)}
                  />
                </div>
              );
            })
          ) : (
            <div className='nocard'>
              <span className='label'>No Item</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
