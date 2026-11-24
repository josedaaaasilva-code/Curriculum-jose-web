"""Genera los tres PDF del CV (castellano, catalán e inglés).

La foto se toma del PDF antiguo que ya está en public/.
"""
import os
import sys

import pymupdf
from fpdf import FPDF

BLUE = (26, 72, 110)
RULE = (140, 170, 195)
BODY = (45, 45, 45)
GREY = (85, 85, 85)
PAGE_W = 595.28
MARGIN = 60

PUBLIC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public")

ES = [
    ("PERFIL PROFESIONAL", [
        ("p", "Técnico informático con formación en Sistemas Microinformáticos y Redes (SMX) y Administración de Sistemas Informáticos en Red (ASIR). Tengo experiencia en soporte IT, atención a usuarios, resolución de incidencias y mantenimiento de equipos, además de participación en tareas con servidores Windows y Linux y recursos de red. Estoy ampliando mis conocimientos en virtualización, Docker, Kubernetes, SQL, PostgreSQL y automatización con scripting. Busco incorporarme a un equipo de soporte IT o sistemas donde aportar capacidad de resolución, trato cercano con el usuario y ganas de seguir creciendo en infraestructura, Cloud y DevOps."),
    ]),
    ("EXPERIENCIA PROFESIONAL", [
        ("e", "TÉCNICO IT I DEVOps | Hardysoft Consultories | 12/2025 - 11/2026",
         "Configuración y administración de servidores Windows y Linux y gestión de recursos de red. Colaboración en la automatización de tareas mediante scripting y en proyectos de infraestructura y despliegue de servicios. Atención a clientes y apoyo en la resolución de problemas técnicos."),
        ("e", "AUXILIAR IT | Ajuntament de Tordera | 01/2024 - 10/2024",
         "Soporte a usuarios y resolución de incidencias. Instalación, configuración y mantenimiento de ordenadores, impresoras y servidores; control del inventario informático y apoyo en tareas básicas de red y seguridad."),
        ("e", "CAMARERO | La Masia, Tordera | 2023 - Actualidad",
         "Atención al cliente, gestión de pedidos y organización del almacén. Coordinación con el equipo en momentos de alta actividad, manteniendo un trato eficaz y profesional; experiencia aplicable a la comunicación, la organización y el trabajo bajo presión."),
    ]),
    ("FORMACIÓN ACADÉMICA", [
        ("e", "CFGS ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED | IES Sa Palomera, Blanes | 2025 - Actualidad",
         "Segundo curso. Administración de sistemas Windows y Linux, redes y servicios, bases de datos SQL, automatización mediante scripting y despliegue de servicios con Docker; aprendizaje de Kubernetes."),
        ("e", "CFGM SISTEMAS MICROINFORMÁTICOS Y REDES (SMX) | IES Lluís Companys, Tordera | 2023 - 2025",
         "Montaje, configuración y mantenimiento de equipos y redes; gestión de infraestructuras IT y resolución de incidencias técnicas."),
        ("e", "EDUCACIÓN SECUNDARIA OBLIGATORIA (ESO) | IES Brianxa, Tordera | 2019 - 2023", None),
    ]),
    ("COMPETENCIAS TÉCNICAS", [
        ("p", "Soporte IT - Atención a usuarios - Resolución de incidencias - Windows y Linux - Administración de servidores - Redes y servicios - SQL y PostgreSQL - Python - PowerShell - Scripting - Docker - Kubernetes - Virtualización - Redes - GitHub - Microsoft Office - Documentación técnica"),
    ]),
    ("COMPETENCIAS PERSONALES E IDIOMAS", [
        ("b", "Personales: ", "Comunicación - Trabajo en equipo - Adaptabilidad - Resolución de problemas - Responsabilidad - Aprendizaje rápido"),
        ("b", "Idiomas: ", "Catalán: nativo - Castellano: nativo - Inglés: B1 - Portugués: A2"),
    ]),
    ("PROYECTO ACADÉMICO", [
        ("p", "Diseño e implantación de infraestructuras IT, desde el montaje de redes hasta la administración de servidores Windows/Linux y la aplicación de políticas de seguridad. Proyecto académico en curso: digitalización de un hospital mediante sistemas de alta disponibilidad, programación y bases de datos."),
    ]),
]

CA = [
    ("PERFIL PROFESSIONAL", [
        ("p", "Tècnic informàtic amb formació en Sistemes Microinformàtics i Xarxes (SMX) i Administració de Sistemes Informàtics en Xarxa (ASIR). Tinc experiència en suport IT, atenció a usuaris, resolució d'incidències i manteniment d'equips, a més de participació en tasques amb servidors Windows i Linux i recursos de xarxa. Estic ampliant els meus coneixements en virtualització, Docker, Kubernetes, SQL, PostgreSQL i automatització amb scripting. Busco incorporar-me a un equip de suport IT o sistemes on aportar capacitat de resolució, tracte proper amb l'usuari i ganes de continuar creixent en infraestructura, Cloud i DevOps."),
    ]),
    ("EXPERIÈNCIA PROFESSIONAL", [
        ("e", "TÈCNIC IT I DEVOps | Hardysoft Consultories | 12/2025 - 11/2026",
         "Configuració i administració de servidors Windows i Linux i gestió de recursos de xarxa. Col·laboració en l'automatització de tasques mitjançant scripting i en projectes d'infraestructura i desplegament de serveis. Atenció a clients i suport en la resolució de problemes tècnics."),
        ("e", "AUXILIAR IT | Ajuntament de Tordera | 01/2024 - 10/2024",
         "Suport a usuaris i resolució d'incidències. Instal·lació, configuració i manteniment d'ordinadors, impressores i servidors; control de l'inventari informàtic i suport en tasques bàsiques de xarxa i seguretat."),
        ("e", "CAMBRER | La Masia, Tordera | 2023 - Actualitat",
         "Atenció al client, gestió de comandes i organització del magatzem. Coordinació amb l'equip en moments d'alta activitat, mantenint un tracte eficaç i professional; experiència aplicable a la comunicació, l'organització i el treball sota pressió."),
    ]),
    ("FORMACIÓ ACADÈMICA", [
        ("e", "CFGS ADMINISTRACIÓ DE SISTEMES INFORMÀTICS EN XARXA | IES Sa Palomera, Blanes | 2025 - Actualitat",
         "Segon curs. Administració de sistemes Windows i Linux, xarxes i serveis, bases de dades SQL, automatització mitjançant scripting i desplegament de serveis amb Docker; aprenentatge de Kubernetes."),
        ("e", "CFGM SISTEMES MICROINFORMÀTICS I XARXES (SMX) | IES Lluís Companys, Tordera | 2023 - 2025",
         "Muntatge, configuració i manteniment d'equips i xarxes; gestió d'infraestructures IT i resolució d'incidències tècniques."),
        ("e", "EDUCACIÓ SECUNDÀRIA OBLIGATÒRIA (ESO) | IES Brianxa, Tordera | 2019 - 2023", None),
    ]),
    ("COMPETÈNCIES TÈCNIQUES", [
        ("p", "Suport IT - Atenció a usuaris - Resolució d'incidències - Windows i Linux - Administració de servidors - Xarxes i serveis - SQL i PostgreSQL - Python - PowerShell - Scripting - Docker - Kubernetes - Virtualització - Xarxes - GitHub - Microsoft Office - Documentació tècnica"),
    ]),
    ("COMPETÈNCIES PERSONALS I IDIOMES", [
        ("b", "Personals: ", "Comunicació - Treball en equip - Adaptabilitat - Resolució de problemes - Responsabilitat - Aprenentatge ràpid"),
        ("b", "Idiomes: ", "Català: natiu - Castellà: natiu - Anglès: B1 - Portuguès: A2"),
    ]),
    ("PROJECTE ACADÈMIC", [
        ("p", "Disseny i implantació d'infraestructures IT, des del muntatge de xarxes fins a l'administració de servidors Windows/Linux i l'aplicació de polítiques de seguretat. Projecte acadèmic en curs: digitalització d'un hospital mitjançant sistemes d'alta disponibilitat, programació i bases de dades."),
    ]),
]

EN = [
    ("PROFESSIONAL PROFILE", [
        ("p", "IT technician trained in Microcomputer Systems and Networks (SMX) and in Networked Computer Systems Administration (ASIR). I have experience in IT support, user assistance, incident resolution and equipment maintenance, as well as taking part in tasks involving Windows and Linux servers and network resources. I am expanding my knowledge of virtualisation, Docker, Kubernetes, SQL, PostgreSQL and scripting automation. I am looking to join an IT support or systems team where I can contribute problem-solving skills, a close and approachable manner with users, and the drive to keep growing in infrastructure, Cloud and DevOps."),
    ]),
    ("WORK EXPERIENCE", [
        ("e", "IT TECHNICIAN & DEVOPS | Hardysoft Consultories | 12/2025 - 11/2026",
         "Configuration and administration of Windows and Linux servers and management of network resources. Collaboration in task automation through scripting and in infrastructure and service deployment projects. Customer service and support in resolving technical problems."),
        ("e", "IT ASSISTANT | Tordera Town Council | 01/2024 - 10/2024",
         "User support and incident resolution. Installation, configuration and maintenance of computers, printers and servers; IT inventory control and support in basic networking and security tasks."),
        ("e", "WAITER | La Masia, Tordera | 2023 - Present",
         "Customer service, order management and warehouse organisation. Coordination with the team during peak periods, maintaining an effective and professional manner; experience applicable to communication, organisation and working under pressure."),
    ]),
    ("EDUCATION", [
        ("e", "HIGHER DEGREE IN NETWORKED COMPUTER SYSTEMS ADMINISTRATION | IES Sa Palomera, Blanes | 2025 - Present",
         "Second year. Windows and Linux systems administration, networks and services, SQL databases, scripting automation and service deployment with Docker; learning Kubernetes."),
        ("e", "INTERMEDIATE DEGREE IN MICROCOMPUTER SYSTEMS AND NETWORKS (SMX) | IES Lluís Companys, Tordera | 2023 - 2025",
         "Assembly, configuration and maintenance of computers and networks; IT infrastructure management and technical incident resolution."),
        ("e", "COMPULSORY SECONDARY EDUCATION (ESO) | IES Brianxa, Tordera | 2019 - 2023", None),
    ]),
    ("TECHNICAL SKILLS", [
        ("p", "IT support - User assistance - Incident resolution - Windows and Linux - Server administration - Networks and services - SQL and PostgreSQL - Python - PowerShell - Scripting - Docker - Kubernetes - Virtualisation - Networking - GitHub - Microsoft Office - Technical documentation"),
    ]),
    ("PERSONAL SKILLS AND LANGUAGES", [
        ("b", "Personal: ", "Communication - Teamwork - Adaptability - Problem solving - Responsibility - Fast learning"),
        ("b", "Languages: ", "Catalan: native - Spanish: native - English: B1 - Portuguese: A2"),
    ]),
    ("ACADEMIC PROJECT", [
        ("p", "Design and implementation of IT infrastructures, from network assembly to Windows/Linux server administration and the application of security policies. Ongoing academic project: digitalisation of a hospital through high-availability systems, programming and databases."),
    ]),
]

CVS = {
    "curriculum-jose-da-silva.pdf": ("TÈCNIC INFORMÀTIC | SUPORT IT | ADMINISTRACIÓ DE SISTEMES", CA),
    "curriculum-jose-da-silva-es.pdf": ("TÉCNICO INFORMÁTICO | SOPORTE IT | ADMINISTRACIÓN DE SISTEMAS", ES),
    "curriculum-jose-da-silva-en.pdf": ("IT TECHNICIAN | IT SUPPORT | SYSTEMS ADMINISTRATION", EN),
}
CONTACT = "Tordera, Barcelona   ·   722 827 664   ·   josedaaaasilva@gmail.com"


class CV(FPDF):
    def __init__(self, photo):
        super().__init__(orientation="P", unit="pt", format="A4")
        self.photo = photo
        self.set_auto_page_break(True, margin=48)
        self.set_margins(MARGIN, MARGIN, MARGIN)
        self.set_title("CV Jose da Silva")
        self.set_author("Jose da Silva")

    def rule(self, y, color=RULE, width=0.7):
        self.set_draw_color(*color)
        self.set_line_width(width)
        self.line(MARGIN, y, PAGE_W - MARGIN, y)

    def header_block(self, role):
        pw = 140
        px = PAGE_W - MARGIN - pw
        if self.photo:
            self.image(self.photo, x=px, y=44, w=pw, h=pw)
        self.set_text_color(*BLUE)
        self.set_font("Helvetica", "B", 25)
        self.set_xy(MARGIN, 54)
        self.cell(0, 30, "JOSE DA SILVA", align="L")
        self.set_text_color(40, 40, 40)
        self.set_font("Helvetica", "B", 8.2)
        self.set_xy(MARGIN, 92)
        self.multi_cell(px - MARGIN - 2, 11.5, role, align="L")
        self.set_text_color(*GREY)
        self.set_font("Helvetica", "", 9.2)
        self.set_xy(MARGIN, self.get_y() + 5)
        self.cell(0, 12, CONTACT, align="L")
        self.rule(198)

    def section(self, title):
        y0 = self.get_y()
        self.set_text_color(*BLUE)
        self.set_font("Helvetica", "B", 10.6)
        self.set_xy(MARGIN, y0)
        self.cell(0, 13, title, align="L")
        self.rule(y0 + 14.5, color=(150, 175, 200), width=0.6)
        self.set_y(y0 + 19)

    def body(self, text, lead=None):
        size, leading = 8.8, 11.6
        self.set_text_color(*BODY)
        y0 = self.get_y()
        if not lead:
            self.set_font("Helvetica", "", size)
            self.set_xy(MARGIN, y0)
            self.multi_cell(PAGE_W - 2 * MARGIN, leading, text, align="J")
            return
        words = [("B", w) for w in lead.split()] + [("", w) for w in text.split()]
        x, y = MARGIN, y0
        for style, word in words:
            self.set_font("Helvetica", style, size)
            w = self.get_string_width(word + " ")
            if x > MARGIN and x + self.get_string_width(word) > PAGE_W - MARGIN:
                x = MARGIN
                y += leading
            self.set_xy(x, y)
            self.cell(self.get_string_width(word + " "), leading, word)
            x += w
        self.set_y(y + leading)

    def entry(self, head, text):
        self.set_text_color(40, 40, 40)
        self.set_font("Helvetica", "B", 9.0)
        self.set_xy(MARGIN, self.get_y())
        self.multi_cell(PAGE_W - 2 * MARGIN, 11.6, head, align="L")
        if text:
            self.body(text)
        self.set_y(self.get_y() + 6)

    def build(self, role, sections):
        self.add_page()
        self.header_block(role)
        self.set_y(210)
        for title, items in sections:
            self.section(title)
            for item in items:
                if item[0] == "p":
                    self.body(item[1])
                    self.set_y(self.get_y() + 8)
                elif item[0] == "b":
                    self.body(item[2], lead=item[1])
                    self.set_y(self.get_y() + 2)
                else:
                    self.entry(item[1], item[2])


def extract_photo():
    for name in ("curriculum-jose-da-silva.pdf", "curriculum-jose-da-silva-es.pdf"):
        path = os.path.join(PUBLIC, name)
        if not os.path.exists(path):
            continue
        doc = pymupdf.open(path)
        for page in doc:
            for info in page.get_images(full=True):
                img = doc.extract_image(info[0])
                out = "/tmp/photo.jpg"
                with open(out, "wb") as fh:
                    fh.write(img["image"])
                doc.close()
                return out
        doc.close()
    return None


def main():
    photo = extract_photo()
    print("foto:", photo)
    for name, (role, sections) in CVS.items():
        pdf = CV(photo)
        pdf.build(role, sections)
        pdf.output(os.path.join(PUBLIC, name))
        print(name, "->", pdf.pages_count, "página(s)")
        if pdf.pages_count > 1:
            sys.exit("El CV no cabe en una página")


if __name__ == "__main__":
    main()
