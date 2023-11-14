import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const JobCard = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h2>Title</h2>
                    <h3>location</h3>
                    <h2>Salary</h2>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default JobCard