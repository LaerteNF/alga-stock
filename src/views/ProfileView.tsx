import React from 'react'
import { connect } from 'react-redux'
import { isPropertySignature } from 'typescript'
import ProfileCard, { User } from '../components/Authentication/ProfileCard'
import Header from '../components/Header'
import Container from '../shared/Container'

declare interface ProfileViewProps{
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
    return <>
        <Header title="Algastock" />
        <Container>
            <div style={{ 
                display: 'flex',
                justifyContent: 'center' 
            }}>
                <ProfileCard user={props.user} />
            </div>        
        </Container>    
    </>
}

const mapStateToProps = () => ({
    user: {
        name: 'Daniel Bonifácio',
        email: 'daniel.bonifacio@algaworks.com'
    }
})

export default connect(mapStateToProps)(ProfileView)