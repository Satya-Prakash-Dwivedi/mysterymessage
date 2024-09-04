import { Html, Head, Font, Preview, Heading, Row, Section, Text } from '@react-email/components';
import { Roboto } from 'next/font/google';

interface VerificationEmailProps{
    username : string,
    otp : string
}

export default function VerificationEmail({username, otp} : VerificationEmailProps){
return (
    <Html lang="en" dir="ltr">
        <Head>
            <title>Verification Code</title>
            <Font 
            fontFamily = "Roboto"
            fallbackFontFamily = "Verdana"
            webFont={{
                url : 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnquEu92Fr1Mu4mxKKTU1KG.woff2',
            }}
            fontWeight = {400}
            fontStyle = "normal"
            ></Font>
        </Head>
        <Preview>Here&apos;s your verification code : {otp}</Preview>
        <Section>
            <Row>
                <Heading as="h2">Hello {username}</Heading>
            </Row>
            <Row>
                <Text>
                    Thankyou for Registering, please use the following verification code
                    to complete your registration. 
                </Text>
            </Row>
            <Row>
                <Text>{otp}</Text>
            </Row>
            <Row>
                <Text>If you did not request this code please ignore this.</Text>
            </Row>
        </Section>
    </Html>
)
}