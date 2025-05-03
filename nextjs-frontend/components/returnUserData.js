export default async function fetchUserData(token,setUserData, setLoading, route){
    const API_URL = process.env['NEXT_PUBLIC_API_URL'];
    const reqOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };
    
    try {
        const req = await fetch(`${API_URL}/api/users${!!route ? route : '/'}`, reqOptions);
        
        if (!req.ok) {
            throw new Error('Erro ao buscar dados do usuário');
        }
        const res = await req.json();
        if (setUserData){
        setUserData(res);}
    } catch (error) {
        console.log(error.message);
    } finally {
        if(setLoading) {
        setLoading(false);
        }
    }
};
