
class FormatFunc {
    
    // phone number 1234567890 => (123) 456-7890
    formatPhone = (phone) => {
        const p = phone.split('')
        const reformatPhone = '('+p[0]+p[1]+p[2]+') '+p[3]+p[4]+p[5]+'-'+p[6]+p[7]+p[8]+p[9]
        return reformatPhone
    }

    // number to $0.00
    formatDollar = (dollar) => {
        return `$${Number(dollar).toFixed(2)}`
    }



}

export default new FormatFunc()