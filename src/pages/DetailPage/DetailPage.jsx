import React, { useEffect } from 'react'
import LichChieuCumRap from '../../layout/LichChieuCumRap/LichChieuCumRap'
import { Header } from 'antd/es/layout/layout'

const detail = () => {
    return (
        <div>
            <Header />
            <div className="container w-3/4 py-10">
                <LichChieuCumRap />
            </div>
        </div>

    )
}

export default detail