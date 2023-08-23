import React, {useState, useEffect} from "react";
import '../styles/finance.css';
import axios from "axios";

interface Coin {
    id: string;
    name: string;
    symbol: string;
    price: number;
    iconUrl: string;
  }

const Finance = () => {
    /* CRYPTO */
    const url =
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8a6d9fb291mshfb63ccc54d3ed58p1a558ejsn1c75f8ec6346',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };
  const controller = new AbortController();
  const [result, setResult] = useState<Coin[]>([]);
  const [searchText, setSearchText] = useState('');
  const [filteredResult, setFilteredResult] = useState<Coin[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  }

  useEffect(() => {
    if (sortBy === 'HIGHEST PRICE') {
      const sortedCoins = [...filteredResult.sort((a,b) => b.price - a.price)];
      setFilteredResult(sortedCoins);
    }
  }, [sortBy, filteredResult]);

  useEffect(() => {
    if (sortBy === 'LOWEST PRICE') {
      const lowerSorted = [...filteredResult.sort((a,b) => a.price - b.price)];
      setFilteredResult(lowerSorted)
    }
  }, [sortBy, filteredResult])

  useEffect(() => {
    if (sortBy === 'NAME') {
      const sortedWithName = [...filteredResult.sort((a,b) => b.name.length - a.name.length)];
      setFilteredResult(sortedWithName);
    }
  }, [sortBy, filteredResult]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (searchText === '') {
        setFilteredResult(result);
    } else {
        const filteredCoins = result.filter((coin) => 
        coin.name.toLocaleLowerCase().includes(searchText.toLowerCase())
        )
        setFilteredResult(filteredCoins)
    }
  }, [searchText, result])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url, options);
        const data = response.data.data.coins;
        setResult(data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
    return () => {
      controller.abort();
    };
  }, []);

    return (
        <div className="financebody" id="forinvestors">
            <div className="finances">
                <p className="fitext">Финансы</p>
                <div className="flex justify-between w-full max-w-[800px]">
                    <div className="finance_money">
                        <p>Активы</p>   
                        <p>0.0 USD</p>                   
                    </div>

                    <div className="finance_money">
                        <p>Доступный баланс</p>   
                        <p>0.0 USD</p>  
                    </div>
                </div>

                <div className="flex flex-col gap-2">

                <div>
                <p>Сортировка по</p>
                  <select 
                  className="select_finance"
                  defaultValue='SORTED BY'
                  onChange={handleSortChange}
                  >
                    <option disabled>SORTED BY</option>
                    <option>HIGHEST PRICE</option>
                    <option>LOWEST PRICE</option>
                    <option>NAME</option>
                  </select>
                </div>

                  <input
                        className="crypto_input_currency"
                        type="text"
                        placeholder="Поиск криптовалюты"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="currency flex flex-col gap-4">

                    <div className='currency_crypto'>
                    {Array.isArray(filteredResult) &&
                      filteredResult.map((coin) => (
                        <div className='currency_block' key={coin.id}>
                          <img src={coin.iconUrl} alt={`${coin.name} Icon`} width="30" height="30" />
                          <p>{coin.name}</p>
                          <p>({coin.symbol})</p>
                          <p>${coin.price.toLocaleString().slice(0, 5)}</p>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finance;