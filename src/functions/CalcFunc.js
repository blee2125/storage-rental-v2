const daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]

class CalcFunc {
    
    // calculates total cost - dates: '2022-01-01' rate: '1.23'(monthly)
    calcTotal = (startDate, endDate, rate) => {
        const startSplit = startDate.split('-')
        const startYear = Number(startSplit[0])
        const startMonth = Number(startSplit[1])
        const startDay = Number(startSplit[2])
        const endSplit = endDate.split('-')
        const endYear = Number(endSplit[0])
        const endMonth = Number(endSplit[1])
        const endDay = Number(endSplit[2])
        let totalMonths = 0
        let totaldays = 0
        const yearDiff = (endYear - startYear) *12
        const monthDiff = endMonth - startMonth
        const dayDiff = endDay - startDay

        totalMonths = yearDiff + monthDiff
        if (dayDiff < 0) {
            if (startYear%4 === 0) {
                totalMonths = totalMonths - 1
                if (startMonth === 2) {
                    totaldays = daysInMonth[startMonth] + dayDiff + 1
                } else {
                    totaldays = daysInMonth[startMonth] + dayDiff
                }
            } else {
                totalMonths = totalMonths - 1
                totaldays = daysInMonth[startMonth] + dayDiff
            }
        } else {
            totaldays = dayDiff
        }
        let total = 0
        total = (totalMonths * rate) + (totaldays * rate / 30)
        const totalCost = Number(total).toFixed(2)
        return totalCost
    }

    // returns balance = totalCost - payments
    calcBalance = (array, key1, key2) => {
        let balance = 0
        array.forEach(a => {
            balance = balance + a[key1] - a[key2]
        })
        return Number(balance).toFixed(2)
    }

    // returns sum of property on array
    calcSum = (array, key) => {
        let sum = 0
        array.forEach(a => {
            sum = sum + a[key]
        })
        return Number(sum).toFixed(2)
    }


}

export default new CalcFunc()