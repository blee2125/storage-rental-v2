const daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]

class DateFunc {
    
    // returns total days between two dates
    leaseLengthDays = (startDate, endDate) => {
        var date1 = new Date(startDate);
        var date2 = new Date(endDate);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
        return diffDays
    }

    // calculates difference between dates - input:'2022-01-01' return months,days
    leaseLength = (startDate, endDate) => {
        const startSplit = startDate.split('-')
        const startYear = Number(startSplit[0])
        const startMonth = Number(startSplit[1])
        const startDay = Number(startSplit[2])
        const endSplit = endDate.split('-')
        const endYear = Number(endSplit[0])
        const endMonth = Number(endSplit[1])
        const endDay = Number(endSplit[2])
        let m = 0
        let d = 0
        const yearDiff = (endYear - startYear) *12
        const monthDiff = endMonth - startMonth
        const dayDiff = endDay - startDay

        m = yearDiff + monthDiff
        if (dayDiff < 0) {
            if (startYear%4 === 0) {
                m = m - 1
                if (startMonth === 2) {
                    d = daysInMonth[startMonth] + dayDiff + 1
                } else {
                    d = daysInMonth[startMonth] + dayDiff
                }
            } else {
                m = m - 1
                d = daysInMonth[startMonth] + dayDiff
            }
        } else {
            d = dayDiff
        }

        return `${m}months - ${d}days`
    }

    // returns past, current, or future in comparison to today's date
    returnPastCurrentFuture = (startDate, endDate) => {
        const startSplit = startDate.split('-')
        const startYear = Number(startSplit[0])
        const startMonth = Number(startSplit[1])
        const startDay = Number(startSplit[2])
        const endSplit = endDate.split('-')
        const endYear = Number(endSplit[0])
        const endMonth = Number(endSplit[1])
        const endDay = Number(endSplit[2])
        const today = new Date()
        const todayYear = today.getFullYear()
        const todayMonth = today.getMonth() + 1
        const todayDay = today.getDate()
        if (endYear < todayYear) {
            return 'Past' //past year
        }  else if (startYear > todayYear) {
            return 'Future' //fut year
        } else {
            if (endMonth < todayMonth) {
                return 'Past' //cur year, past month
            } else if (endMonth === todayMonth) {
                if (endDay < todayDay) {
                    return 'Past' //cur year, cur month, past day
                }
            }
            if (startMonth > todayMonth) {
                return 'Future' //fut month
            } else if (startMonth === todayMonth) {
                if (startDay > todayDay) {
                    return 'Future' //cur month, fut day
                }
            }
            return 'Current'
        }
    }



}

export default new DateFunc()