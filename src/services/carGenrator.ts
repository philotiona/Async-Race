export const carBrands = [
    'Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 
    'Ford', 'Chevrolet', 'Volkswagen', 'Nissan', 'Hyundai',
    'Kia', 'Volvo', 'Porsche', 'Ferrari', 'Lamborghini',
    'Maserati', 'Jaguar', 'Land Rover', 'Tesla', 'Lexus',
    'Subaru', 'Mazda', 'Chrysler', 'Jeep', 'Dodge',
    'Infiniti', 'Acura', 'Cadillac', 'Lincoln', 'Buick',
    'GMC', 'Ram', 'Fiat', 'Alfa Romeo', 'Mini',
    'Genesis', 'Bentley', 'Rolls-Royce', 'McLaren', 'Aston Martin',
    'Bugatti', 'Lotus', 'Polestar', 'Rivian', 'Lucid',
    'Koenigsegg', 'Pagani', 'Rimac', 'Pininfarina', 'Karma'
];

export const carModels = [
    'Camry', 'Civic', '3 Series', 'C-Class', 'A4',
    'Mustang', 'Corvette', 'Golf', 'Altima', 'Elantra',
    'Telluride', 'XC90', '911', 'F8', 'Huracan',
    'Ghibli', 'F-Type', 'Range Rover', 'Model S', 'RX',
    'WRX', 'CX-5', '300', 'Wrangler', 'Challenger',
    'Q50', 'MDX', 'Escalade', 'Navigator', 'Enclave',
    'Sierra', '1500', '500', 'Giulia', 'Cooper',
    'G70', 'Continental', 'Phantom', '720S', 'DB11',
    'Chiron', 'Evora', '2', 'R1T', 'Air',
    'Jesko', 'Huayra', 'Nevera', 'Battista', 'Revero'
];

export const generateCars = () => {
    return Array.from({ length: 100 }, () => ({
        name: `${carBrands[Math.floor(Math.random() * carBrands.length)]} ${carModels[Math.floor(Math.random() * carModels.length)]}`,
        color: '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0'),
        id: null
    }));
};

export const carGenerator = async (cars: Array<{name: string, color: string, id: null}>) => {
    try {
        const promises = cars.map(car => 
            fetch('http://localhost:3000/garage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            }).then(res => res.json())
        );

        const newCars = await Promise.all(promises);
        return newCars;
    } catch (error) {
        console.error('Failed to generate cars:', error);
        throw error;
    }
}
