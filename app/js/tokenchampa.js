//btc
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@aggTrade');
        // btc,eth,bnb
        // https://github.com/binance-us/binance-official-api-docs/blob/master/web-socket-streams.md
        // etheur@trade
        let sp = document.getElementById("btc");
        let price;
        let lp = null;//lastprice
        ws.onmessage = (event) => {
            let stockobj = JSON.parse(event.data);
            price = parseFloat(stockobj.p).toFixed(0);
            sp.innerText = price;
            sp.style.color = !lp || lp === price ? 'green' : price > lp ? 'green' : 'red';
            lp = price;
        }

        //eth

        let wse = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@aggTrade');
        // btc,eth,bnb
        // https://github.com/binance-us/binance-official-api-docs/blob/master/web-socket-streams.md
        // etheur@trade
        let spe = document.getElementById("eth");
        let pricee;
        let lpe = null;//lastprice
        wse.onmessage = (event) => {
            let stockobje = JSON.parse(event.data);
            pricee = parseFloat(stockobje.p).toFixed(0);
            spe.innerText = pricee;
            spe.style.color = !lpe || lpe === pricee ? 'green' : pricee > lpe ? 'green' : 'red';
            lpe = pricee;
        }
        
        //bnb
        let wsb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@aggTrade');
        // btc,eth,bnb
        // https://github.com/binance-us/binance-official-api-docs/blob/master/web-socket-streams.md
        // etheur@trade
        let spb = document.getElementById("bnb");
        let priceb;
        let lpb = null;//lastprice
        wsb.onmessage = (event) => {
            let stockobjb = JSON.parse(event.data);
            priceb = parseFloat(stockobjb.p).toFixed(1);
            spb.innerText = priceb;
            spb.style.color = !lpb || lpb === priceb ? 'green' : priceb > lpb ? 'green' : 'red';
            lpb = priceb;
        }
        