import React, { useEffect, useRef } from 'react';

const TradingViewWidget: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetContainerRef.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.text = JSON.stringify({
      symbols: [
        { proName: 'BMFBOVESPA:IRBR3', title: 'IRBR3' },
        { proName: 'BMFBOVESPA:BRFS3', title: 'BRFS3' },
        { proName: 'BMFBOVESPA:MRVE3', title: 'MRVE3' },
        { proName: 'BMFBOVESPA:ENEV3', title: 'ENEV3' },
        { proName: 'BMFBOVESPA:RAIL3', title: 'RAIL3' },
        { proName: 'BMFBOVESPA:RRRP3', title: 'RRRP3' },
        { proName: 'BMFBOVESPA:IGTI11', title: 'IGTI11' },
        { proName: 'BMFBOVESPA:ASAI3', title: 'ASAI3' },
        { proName: 'BMFBOVESPA:USIM5', title: 'USIM5' },
        { proName: 'BMFBOVESPA:ELET3', title: 'ELET3' },
        { proName: 'BMFBOVESPA:ELET6', title: 'ELET6' },
        { proName: 'BMFBOVESPA:EQTL3', title: 'EQTL3' },
        { proName: 'BMFBOVESPA:SBSP3', title: 'SBSP3' },
        { proName: 'BMFBOVESPA:SOMA3', title: 'SOMA3' },
        { proName: 'BMFBOVESPA:AZUL4', title: 'AZUL4' },
        { proName: 'BMFBOVESPA:LWSA3', title: 'LWSA3' },
        { proName: 'BMFBOVESPA:CSAN3', title: 'CSAN3' },
        { proName: 'BMFBOVESPA:CRFB3', title: 'CRFB3' },
        { proName: 'BMFBOVESPA:JBSS3', title: 'JBSS3' },
        { proName: 'BMFBOVESPA:CVCB3', title: 'CVCB3' },
        { proName: 'BMFBOVESPA:PETZ3', title: 'PETZ3' },
        { proName: 'BMFBOVESPA:EMBR3', title: 'EMBR3' },
        { proName: 'BMFBOVESPA:SMTO3', title: 'SMTO3' },
        { proName: 'BMFBOVESPA:BEEF3', title: 'BEEF3' },
        { proName: 'BMFBOVESPA:UGPA3', title: 'UGPA3' },
        { proName: 'BMFBOVESPA:MRFG3', title: 'MRFG3' },
        { proName: 'BMFBOVESPA:CPFE3', title: 'CPFE3' },
        { proName: 'BMFBOVESPA:YDUQ3', title: 'YDUQ3' },
        { proName: 'BMFBOVESPA:PCAR3', title: 'PCAR3' },
        { proName: 'BMFBOVESPA:HAPV3', title: 'HAPV3' },
        { proName: 'BMFBOVESPA:CPLE6', title: 'CPLE6' },
        { proName: 'BMFBOVESPA:ALOS3', title: 'ALOS3' },
        { proName: 'BMFBOVESPA:CCRO3', title: 'CCRO3' },
        { proName: 'BMFBOVESPA:ARZZ3', title: 'ARZZ3' },
        { proName: 'BMFBOVESPA:EZTC3', title: 'EZTC3' },
        { proName: 'BMFBOVESPA:GOAU4', title: 'GOAU4' },
        { proName: 'BMFBOVESPA:GGBR4', title: 'GGBR4' },
        { proName: 'BMFBOVESPA:CSNA3', title: 'CSNA3' },
        { proName: 'BMFBOVESPA:BRAP4', title: 'BRAP4' },
        { proName: 'BMFBOVESPA:VALE3', title: 'VALE3' },
        { proName: 'BMFBOVESPA:PETR4', title: 'PETR4' },
        { proName: 'BMFBOVESPA:PETR3', title: 'PETR3' },
        { proName: 'BMFBOVESPA:ALPA4', title: 'ALPA4' },
        { proName: 'BMFBOVESPA:COGN3', title: 'COGN3' },
        { proName: 'BMFBOVESPA:BRKM5', title: 'BRKM5' },
        { proName: 'BMFBOVESPA:TOTS3', title: 'TOTS3' },
        { proName: 'BMFBOVESPA:RECV3', title: 'RECV3' },
        { proName: 'BMFBOVESPA:SUZB3', title: 'SUZB3' },
        { proName: 'BMFBOVESPA:CYRE3', title: 'CYRE3' },
        { proName: 'BMFBOVESPA:BBAS3', title: 'BBAS3' },
        { proName: 'BMFBOVESPA:PRIO3', title: 'PRIO3' },
        { proName: 'BMFBOVESPA:TRPL4', title: 'TRPL4' },
        { proName: 'BMFBOVESPA:BHIA3', title: 'BHIA3' },
        { proName: 'BMFBOVESPA:FLRY3', title: 'FLRY3' },
        { proName: 'BMFBOVESPA:WEGE3', title: 'WEGE3' },
        { proName: 'BMFBOVESPA:RDOR3', title: 'RDOR3' },
        { proName: 'BMFBOVESPA:ITSA4', title: 'ITSA4' },
        { proName: 'BMFBOVESPA:VAMO3', title: 'VAMO3' },
        { proName: 'BMFBOVESPA:ABEV3', title: 'ABEV3' },
        { proName: 'BMFBOVESPA:DXCO3', title: 'DXCO3' },
        { proName: 'BMFBOVESPA:RADL3', title: 'RADL3' },
        { proName: 'BMFBOVESPA:LREN3', title: 'LREN3' },
        { proName: 'BMFBOVESPA:NTCO3', title: 'NTCO3' },
        { proName: 'BMFBOVESPA:RAIZ4', title: 'RAIZ4' },
        { proName: 'BMFBOVESPA:EGIE3', title: 'EGIE3' },
        { proName: 'BMFBOVESPA:CMIG4', title: 'CMIG4' },
        { proName: 'BMFBOVESPA:TIMS3', title: 'TIMS3' },
        { proName: 'BMFBOVESPA:VBBR3', title: 'VBBR3' },
        { proName: 'BMFBOVESPA:VIVT3', title: 'VIVT3' },
        { proName: 'BMFBOVESPA:RENT3', title: 'RENT3' },
        { proName: 'BMFBOVESPA:MULT3', title: 'MULT3' },
        { proName: 'BMFBOVESPA:SLCE3', title: 'SLCE3' },
        { proName: 'BMFBOVESPA:CIEL3', title: 'CIEL3' },
        { proName: 'BMFBOVESPA:B3SA3', title: 'B3SA3' },
        { proName: 'BMFBOVESPA:CMIN3', title: 'CMIN3' },
        { proName: 'BMFBOVESPA:ENGI11', title: 'ENGI11' },
        { proName: 'BMFBOVESPA:BPAC11', title: 'BPAC11' },
        { proName: 'BMFBOVESPA:TAEE11', title: 'TAEE11' },
        { proName: 'BMFBOVESPA:SANB11', title: 'SANB11' },
        { proName: 'BMFBOVESPA:ITUB4', title: 'ITUB4' },
        { proName: 'BMFBOVESPA:MGLU3', title: 'MGLU3' },
        { proName: 'BMFBOVESPA:BBDC3', title: 'BBDC3' },
        { proName: 'BMFBOVESPA:BBDC4', title: 'BBDC4' },
        { proName: 'BMFBOVESPA:HYPE3', title: 'HYPE3' },
        { proName: 'BMFBOVESPA:BBSE3', title: 'BBSE3' },
        { proName: 'BMFBOVESPA:KLBN11', title: 'KLBN11' },
        { proName: 'BMFBOVESPA:ENEV3', title: 'ENEV3' }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'br'
    });

    widgetContainerRef.current.appendChild(script);

    return () => {
      if (!widgetContainerRef.current) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      widgetContainerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={widgetContainerRef}>
      <div className="tradingview-widget-container__widget"></div>
      {/* 
      <div className="tradingview-widget-copyright">
        <a href="https://br.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Monitore todos os mercados no TradingView</span>
        </a>
      </div> 
      */}
    </div>
  );
};

export default TradingViewWidget;
