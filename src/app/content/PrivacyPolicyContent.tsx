import { Container, Divider, Header } from "semantic-ui-react"

function privacyPolicy() {
    return (
        <Container>
            <Header as='h1' textAlign="center">Privacy Policy</Header>

            <Header as='h3' textAlign="center">Effective Date: 09/13/24</Header>

            <Header as='h2'>1. Introduction</Header>

            Welcome to Reindeer Roundup ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services (collectively, the "Service"). By accessing or using the Service, you agree to the terms of this Privacy Policy.

            <Divider />

            <Header as='h2'>2. Information We Collect</Header>


            <Header as='h3'>2.1. Information Provided by Users</Header>

            Google Login Information: When you sign up for Reindeer Roundup using Google Login, we collect your name and email address from your Google account. This information is essential for creating and managing your user account within our Service.

            <Header as='h3'>2.2. Information Collected Automatically</Header>


            Usage Data: We utilize Google Analytics to gather general information about how users interact with our Service. This includes data such as the number of users, pages visited, time spent on pages, and other aggregate statistics. This information helps us understand user behavior and improve our Service.
            No Cookies Used: We do not use cookies or similar tracking technologies to collect personal data.

            <Divider />

            <Header as='h2'>3. How We Use Your Information</Header>

            We use the information we collect for various purposes, including:

            Account Management: To create, manage, and maintain your user account.
            Service Improvement: To analyze usage patterns and improve the functionality and user experience of our Service.
            Communication: To respond to your inquiries submitted through our "Contact Us" page and provide customer support.

            <Divider />

            <Header as='h2'>4. Sharing and Disclosure of Information</Header>

            We value your privacy and do not share your personal information with third parties, except in the following circumstances:

            Service Providers: We may share your information with trusted third-party service providers who assist us in operating our Service, such as Google Analytics. These parties are obligated to keep your information confidential.
            Legal Obligations: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).

            <Divider />

            <Header as='h2'>5. Data Retention</Header>

            We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent required to comply with legal obligations, resolve disputes, and enforce our agreements.

            <Divider />

            <Header as='h2'>6. Security of Your Information</Header>

            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.

            <Divider />

            <Header as='h2'>7. Children's Privacy</Header>

            Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected personal data from a child under 13, we will take steps to remove that information from our servers.

            <Divider />

            <Header as='h2'>8. Changes to This Privacy Policy</Header>

            We may update our Privacy Policy from time to time. Any changes will be effective immediately upon posting the updated Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any changes.

            <Divider />

            <Header as='h2'>9. Contact Us</Header>

            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us through our "Contact Us" page on the website.

            <Divider />

            By using Reindeer Roundup, you consent to our collection and use of your information as described in this Privacy Policy.
        </Container>
    )
}

export { privacyPolicy }