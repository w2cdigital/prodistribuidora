import { TCouncil } from "types/council"
import * as S from "./styles"
import { TProfessional } from "types/professional"
import { Mask, maskCEP, maskPhone } from "utils/masks"
import Image from "next/image"
import { useClinic } from "app/(Conected)/(Clinic)/provider"
import { LogoSVG } from "components/Logo"
import { format } from "date-fns"
import { TFullClient } from "types/client"
import envs from "helpers/envs"
import { ptBR } from "date-fns/locale"

function ProfessionalInfo({
  professional,
  council,
}: {
  professional: TProfessional
  professionalAddress: TProfessional["address"]
  council: TCouncil
}) {
  /* const address = [
    professionalAddress?.publicPlace,
    professionalAddress?.number,
    [professionalAddress?.city, professionalAddress?.state]
      .filter(Boolean)
      .join("-"),
  ]
    .filter(Boolean)
    .join(", ") */
  return (
    <S.CardInfo>
      <b>
        Dr{professional?.gender === "f" && "(a)"}. {professional?.name}{" "}
        {professional?.lastName}
      </b>
      <div>
        <p>{council?.name}: </p>
        <span>{professional?.registry}</span>
      </div>
      {/*  <div>
        <span>
          {!!professional?.phone && (
            <Mask type="phone" value={professional?.phone} />
          )}
        </span>
      </div> */}
      <div>
        <span>
          {professional?.specialtyProfessional
            ?.map((i) => i?.specialty?.name)
            .join(" / ")}
        </span>
      </div>
      {/* <div>
        <span>{address && <p>{address}</p>}</span>
      </div> */}
    </S.CardInfo>
  )
}
function ClinicAddress() {
  const { address: clinicAddress, clinic } = useClinic()
  const address = [
    clinicAddress?.publicPlace,
    clinicAddress?.number,
    clinicAddress?.district,
  ]
    .filter(Boolean)
    .join(", ")
  const city = [
    clinicAddress?.cep && `CEP ${maskCEP(clinicAddress?.cep)}`,
    [clinicAddress?.city, clinicAddress?.state].filter(Boolean).join("-"),
  ]
    .filter(Boolean)
    .join(" - ")
  const phone = [
    clinic.phone && maskPhone(clinic.phone),
    clinic.whatsapp && maskPhone(clinic.whatsapp),
  ]
    .filter(Boolean)
    .join(" | ")
  return (
    <S.CardInfo>
      <div>
        <span>{address && <p>{address}</p>}</span>
      </div>
      <div>
        <span>{city && <p>{city}</p>}</span>
      </div>
      <div>
        <span>{phone && <p>Fone: {phone}</p>}</span>
      </div>
    </S.CardInfo>
  )
}

function LogoClinica() {
  const { clinic } = useClinic()

  return (
    <S.Logo>
      {!!clinic?.logo && (
        <Image
          unoptimized
          src={`${envs.repo}logo_clinica/${clinic?.logo}`}
          alt={clinic?.fantasyName}
          width={0}
          height={0}
          sizes="100vw"
        />
      )}
      {!clinic?.logo && <LogoSVG />}
    </S.Logo>
  )
}
function Signature({ label, date }: { label?: string; date?: string }) {
  const { clinic, address: clinicAddress } = useClinic()

  const cityState = [clinicAddress?.city, clinicAddress?.state]
    .filter(Boolean)
    .join("-")

  const address = [
    clinicAddress?.publicPlace,
    clinicAddress?.number,
    `CEP ${maskCEP(clinicAddress?.cep)}`,
    cityState,
    clinic.phone && `\nFone: ${maskPhone(clinic.phone)}`,
  ]
    .filter(Boolean)
    .join(", ")
  const reference = [
    cityState,
    date && format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
  ]
    .filter(Boolean)
    .join(", ")
  return (
    <S.Signature>
      <div className="reference">{reference}</div>
      <div className="sign">
        <p className="label hidden">HIDDEN</p>
        <span className="line" />
        <p className="label">
          {label || `${clinic?.fantasyName} | ${address}`}
        </p>
      </div>
    </S.Signature>
  )
}

function Line({ children }: { children?: React.ReactNode }) {
  return (
    <S.Line>
      <div className="text">{children}</div>
      <i className="line" />
    </S.Line>
  )
}
function PatientInfo({ client }: { client?: TFullClient }) {
  const address = [
    client?.clientAddress?.publicPlace,
    client?.clientAddress?.number,
    [client?.clientAddress?.city, client?.clientAddress?.state]
      .filter(Boolean)
      .join("-"),
  ]
    .filter(Boolean)
    .join(", ")
  return (
    <>
      <Line>
        <b>Paciente:</b>
        <span>
          {client?.name} {client?.lastName}
        </span>
      </Line>
      {!!address && (
        <Line>
          <b>Endereço:</b>
          <span>{address}</span>
        </Line>
      )}
      {client?.document && (
        <Line>
          <b>CPF:</b>
          <span>
            <Mask type="cpf" value={client?.document} />
          </span>
        </Line>
      )}
    </>
  )
}

function PrinterDocument({ children }: { children?: React.ReactNode }) {
  return <S.Document>{children}</S.Document>
}

PrinterDocument.SpaceBetween = S.SpaceBetween
PrinterDocument.Title = S.Title
PrinterDocument.Table = S.Table
PrinterDocument.Center = S.Center
PrinterDocument.Gap = S.Gap
PrinterDocument.Line = Line
PrinterDocument.Professional = ProfessionalInfo
PrinterDocument.Patient = PatientInfo
PrinterDocument.Logo = LogoClinica
PrinterDocument.Clinic = ClinicAddress
PrinterDocument.Signature = Signature

export default PrinterDocument
