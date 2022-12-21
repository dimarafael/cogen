
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

export function Chart(){

    const data = [
        {
            time: '00:00',
            air: 210,
            beans: 170,
            ror: 2,
            fire: 70,
            drum: 45,
            fan: 110
        },
        {
            time: '00:05',
            air: 200,
            beans: 160,
            ror: 2.4,
            fire: 70,
            drum: 45,
            fan: 111
        },
        {
            time: '00:10',
            air: 198,
            beans: 150,
            ror: 1.8,
            fire: 70,
            drum: 45,
            fan: 103
        },
        {
            time: '00:15',
            air: 204,
            beans: 154,
            ror: 1.4,
            fire: 70,
            drum: 45,
            fan: 107
        },
        {
            time: '00:20',
            air: 209,
            beans: 164,
            ror: 0.7,
            fire: 70,
            drum: 45,
            fan: 111
        },
        {
            time: '00:25',
            air: 211,
            beans: 173,
            ror: 1.1,
            fire: 70,
            drum: 45,
            fan: 109
        },
        {
            time: '00:30',
            air: 201,
            beans: 163,
            ror: 1.7,
            fire: 70,
            drum: 45,
            fan: 101
        },
        {
            time: '00:35',
            air: 206,
            beans: 155,
            ror: 1.9,
            fire: 70,
            drum: 45,
            fan: 104
        },
        {
            time: '00:40',
            air: 209,
            beans: 163,
            ror: 2.1,
            fire: 70,
            drum: 45,
            fan: 97
        },
        {
            time: '00:45',
            air: 215,
            beans: 177,
            ror: 2.3,
            fire: 70,
            drum: 45,
            fan: 99
        },
        {
            time: '00:50',
            air: 217,
            beans: 183,
            ror: 2.1,
            fire: 70,
            drum: 45,
            fan: 103
        },
        {
            time: '00:55',
            air: 211,
            beans: 179,
            ror: 2.4,
            fire: 70,
            drum: 45,
            fan: 105
        },
        {
            time: '01:00',
            air: 215,
            beans: 165,
            ror: 2.7,
            fire: 70,
            drum: 45,
            fan: 107
        }
    ];
    return(
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Line yAxisId="left" type="monotone" dataKey="air" stroke="#2563eb" dot={false} isAnimationActive={false}/>
                    <Line yAxisId="left" type="monotone" dataKey="beans" stroke="#e11d48" dot={false} isAnimationActive={false}/>
                    <Line yAxisId="right" type="monotone" dataKey="ror" stroke="#ca8a04" dot={false} isAnimationActive={false}/>
                    <Line yAxisId="left" type="monotone" dataKey="fire" stroke="#16a34a" dot={false} isAnimationActive={false}/>
                    <Line yAxisId="left" type="monotone" dataKey="drum" stroke="#ea580c" dot={false} isAnimationActive={false}/>
                    <Line yAxisId="left" type="monotone" dataKey="fan" stroke="#9333ea" dot={false} isAnimationActive={false}/>
                </LineChart>
            </ResponsiveContainer>
    )
}