import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/asset/logo.png" alt="Comforty" width={168} height={40} />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus
            </p>
            <div className="flex justify-around gap-4">
              <Link href="https://www.facebook.com/" className="text-muted-foreground my-auto hover:text-primary">
                <Image src="/asset/f.png" alt="Facebook" width={16} height={16} />
              </Link>
              <Link href="https://www.twitter.com/" className="text-muted-foreground hover:text-primary">
                <Image src="/asset/t.png" alt="Twitter" width={38} height={38} />
              </Link>
              <Link href="https://www.instagram.com/" className="text-muted-foreground hover:text-primary">
                <Image src="/asset/i.png" alt="Instagram" width={38} height={38} />
              </Link>
              <Link href="https://www.Pinterest.com/" className="text-muted-foreground hover:text-primary">
                <Image src="/asset/p.png" alt="Pinterest" width={38} height={38} />
              </Link>
              <Link href="https://www.YouTube.com/" className="text-muted-foreground hover:text-primary">
                <Image src="/asset/u.png" alt="YouTube" width={38} height={38} />
              </Link>
            </div>

          </div>

          {/* Category */}
          <div>
            <h3 className="font-bold mb-4">CATEGORY</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Sofa</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Armchair</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Wing Chair</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Desk Chair</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">wooden Chair</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Park Bench</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Help & Support</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Tearms & Conditions</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Help</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">NEWSLETTER</h3>
            <div className="flex gap-2 mb-4">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 dec  - Develop by SAMI ULLAH BAIG
          </p>
          <div className="flex gap-2">
            <Link target='_blank' href={"https://www.paypal.com/"}>
            <Image src="/asset/pp.jpg" alt="PayPal" width={40} height={24} />
            </Link>
            
            <Link target='_blank' href={"https://www.americanexpress.com/"}>
            <Image src="/asset/ae.svg" alt="Mastercard" width={40} height={24} />
            </Link>
            <Link target='_blank' href={"https://pk.visamiddleeast.com/pay-with-visa/find-a-card/credit-cards.html"}>
            <Image src="/asset/visa.png" alt="Visa" width={40} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

