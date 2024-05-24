import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

interface TimezoneProps {
  timezone: string
}

const Timezone: React.FC<TimezoneProps> = ({ timezone }: TimezoneProps) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone)
      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm:ss A'))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">Frankfurt am Main, Germany</p>
    </div>
  )
}
export default Timezone
