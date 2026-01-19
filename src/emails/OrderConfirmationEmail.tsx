import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
  Hr,
  Row,
  Column,
} from "@react-email/components";
import { Tailwind, Header, Footer, Button, Card } from "../components/email";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderConfirmationEmailProps {
  customerName?: string;
  orderNumber?: string;
  orderDate?: string;
  items?: OrderItem[];
  subtotal?: number;
  shipping?: number;
  total?: number;
  trackingUrl?: string;
}

export const OrderConfirmationEmail = ({
  customerName = "Sarah",
  orderNumber = "JA-2026-78432",
  orderDate = "January 19, 2026",
  items = [
    { name: "Premium Expert Consultation (Medical)", quantity: 1, price: 49.0 },
    { name: "Follow-up Session Package", quantity: 2, price: 25.0 },
  ],
  subtotal = 99.0,
  shipping = 0,
  total = 99.0,
  trackingUrl = "https://example.com/order/track",
}: OrderConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Order #{orderNumber} confirmed! Thank you for your purchase.
      </Preview>
      <Tailwind>
        <Body className="m-0 bg-gray-100 font-sans">
          <Container className="mx-auto max-w-xl bg-white">
            {/* Header */}
            <Section className="px-8 py-6">
              <Header
                logoSrc="https://ww2-secure.justanswer.com/static/Touchpoint/Fully_Branded_Javatar/Logo_JAvatar_www_askadoctor_help.png"
                logoAlt="JustAnswer"
                logoHeight="40px"
              />
            </Section>

            <Hr className="m-0 border-gray-200" />

            {/* Main Content */}
            <Section className="px-8 py-10">
              <Heading className="m-0 mb-2 text-2xl font-bold text-gray-900">
                Order Confirmed! ✓
              </Heading>

              <Text className="mb-8 text-base text-gray-600">
                Thank you for your order, {customerName}!
              </Text>

              {/* Order Details Card */}
              <Card>
                <Text className="m-0 mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Order Details
                </Text>

                <Row className="mb-2">
                  <Column>
                    <Text className="m-0 text-sm text-gray-600">
                      Order Number:
                    </Text>
                  </Column>
                  <Column align="right">
                    <Text className="m-0 text-sm font-semibold text-gray-900">
                      {orderNumber}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-4">
                  <Column>
                    <Text className="m-0 text-sm text-gray-600">
                      Order Date:
                    </Text>
                  </Column>
                  <Column align="right">
                    <Text className="m-0 text-sm text-gray-900">{orderDate}</Text>
                  </Column>
                </Row>

                <Hr className="my-4 border-gray-200" />

                {/* Order Items */}
                {items.map((item, index) => (
                  <Row key={index} className="mb-3">
                    <Column>
                      <Text className="m-0 text-sm text-gray-800">
                        {item.name}
                        <span className="text-gray-500"> × {item.quantity}</span>
                      </Text>
                    </Column>
                    <Column align="right">
                      <Text className="m-0 text-sm text-gray-800">
                        ${item.price.toFixed(2)}
                      </Text>
                    </Column>
                  </Row>
                ))}

                <Hr className="my-4 border-gray-200" />

                {/* Totals */}
                <Row className="mb-2">
                  <Column>
                    <Text className="m-0 text-sm text-gray-600">Subtotal</Text>
                  </Column>
                  <Column align="right">
                    <Text className="m-0 text-sm text-gray-800">
                      ${subtotal.toFixed(2)}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-2">
                  <Column>
                    <Text className="m-0 text-sm text-gray-600">Shipping</Text>
                  </Column>
                  <Column align="right">
                    <Text className="m-0 text-sm text-gray-800">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </Text>
                  </Column>
                </Row>

                <Hr className="my-4 border-gray-200" />

                <Row>
                  <Column>
                    <Text className="m-0 text-lg font-bold text-gray-900">
                      Total
                    </Text>
                  </Column>
                  <Column align="right">
                    <Text className="m-0 text-lg font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </Text>
                  </Column>
                </Row>
              </Card>

              {/* CTA Button */}
              <Section className="mt-8 text-center">
                <Button href={trackingUrl}>View Order Status</Button>
              </Section>

              <Text className="mt-6 text-center text-sm text-gray-500">
                Questions about your order? Our experts are here 24/7.
              </Text>
            </Section>

            {/* Footer */}
            <Footer
              companyName="JustAnswer LLC"
              address="440 N Barranca Ave #7508, Covina, CA 91723"
              unsubscribeUrl="https://example.com/unsubscribe"
              privacyPolicyUrl="https://example.com/privacy"
              websiteUrl="https://www.justanswer.com"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OrderConfirmationEmail;
