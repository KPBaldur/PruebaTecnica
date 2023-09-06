import React from 'react';
import History from '../components/History';
import { getHistory } from '../history';

import Link from 'next/link';

const HistoryPage = ( ) => {
    const history = getHistory();
    
    const handleHistoryClick = (index) =>{

    }
    return (
        <div>
            <Link href="/" legacyBehavior>
                <a>Calculadora</a>
            </Link>
            <History history={history} onClick={handleHistoryClick}/>
        </div>
    )
}

export default HistoryPage;