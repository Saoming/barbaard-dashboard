import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { Select } from "@chakra-ui/select";
import React, { useState } from "react"
import DatePicker from 'react-date-picker/dist/entry.nostyle';

interface Users {
    email: string;
    password: string;
    handleSubmit: (event: React.FormEventHandler<HTMLFormElement>) => void;
}

interface Staff {
    email: string;
    password: string;
    handleSubmit: (event: React.FormEventHandler<HTMLFormElement>) => void;
}

export const StaffLogin: React.FC<Staff> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    return (
        <form>
            <Heading as="h2" fontSize="18px" mb="15px"> Admin Login </Heading>
            <Box mb="10px">
                <FormLabel> Email Adress</FormLabel>
                <Input 
                    isRequired 
                    type="email" 
                    id="email" 
                    aria-describedby="email-helper-text"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                >
                </Input>
            </Box>
            <Box mb="10px">
                <FormLabel> Password </FormLabel>
                <Input
                    isRequired
                    type="password"
                    id="password"
                    aria-describedby="password-helper-text"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                >
                </Input>
            </Box>
            <Button type="submit" colorScheme="messenger"> Login as a Admin </Button>
        </form>
    )
}

export const ExistingGuestForm: React.FC<Users> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <Box maxWidth="md">
            <form>
                <Heading as="h2" fontSize="18px" mb="15px"> Are you an existing guest ? </Heading>
                <Box mb="10px">
                    <FormLabel> Email Adress</FormLabel>
                    <Input 
                        isRequired 
                        type="email" 
                        id="email" 
                        aria-describedby="email-helper-text"
                    >
                    </Input>
                </Box>
                <Box mb="10px">
                    <FormLabel> Password </FormLabel>
                    <Input
                        isRequired
                        type="password"
                        id="password"
                        aria-describedby="password-helper-text"
                    >
                    </Input>
                </Box>
                <Button type="submit" colorScheme="messenger"> Login as a Existing Users </Button>
            </form>
        </Box>
    )
}

// export const BarberBookingForm: React.FC = () => {

//     const [value, onChange] = useState(new Date());

//     return (
//         <form>
//             <Heading as="h2" mb="15px"> Barbers Booking Form </Heading>

//             <Box mb="15px">
//                 <FormLabel> Select your Location </FormLabel>
//                 <Select placeholder="select your location">
//                     <option value="HCM"> Ho Chi Minh </option>
//                     <option value="Hanoi"> Hanoi </option>
//                 </Select>
//             </Box>

//             <Box mb="15px">
//                  <FormLabel> Select your Head or Hair Services </FormLabel>
//                  <Select placeholder="select your haircut services">
//                     <option value="HCM"> Gentleman Haircut </option>
//                     <option value="Hanoi"> HeadShave </option>
//                     <option value="Hanoi"> Express Haircut  </option>
//                 </Select>
//             </Box>

//             <Box mb="15px">
//                  <FormLabel> Select your Beard or Shaving Services </FormLabel>
//                  <Select placeholder="select your shaving services">
//                     <option value="HCM"> Gentleman's Beard Trim </option>
//                     <option value="Hanoi"> Classic Hot Towel Service </option>
//                     <option value="Hanoi"> Express Beard Trim  </option>
//                 </Select>
//             </Box>

//             <Box mb="15px">
//                  <FormLabel> Select your Gentleman Ups </FormLabel>
//                  <Select placeholder="select extra offers">
//                     <option value="HCM"> Signature Drink Upgrade </option>
//                     <option value="Hanoi"> Corona Cigar </option>
//                     <option value="Hanoi"> Traditional Shoeshine  </option>
//                 </Select>
//             </Box>

//             {/* Select Day you want to get Date */}
//             <Box mb="15px">
//                 <FormLabel> Select Date & Time  </FormLabel>
//                 <DatePicker onChange={onChange} value={value} />
//             </Box>

//             <Box mb="15px">
//                  <FormLabel> Select your Type of Barbers </FormLabel>
//                  <Select placeholder="select your barbers ">
//                     <option value="HCM"> Junior Barbers </option>
//                     <option value="Hanoi"> Senior Barbers </option>
//                 </Select>
//             </Box>
//             {/*  If it Junior */}

//             {/*  If it Senior  */}

//             {/* If you Choose the Barber First then Show Calendar */}

//             {/* Confirm Booking, Show Their Informations Regarding the Barbers */}
//             <Box>

//             </Box>
//         </form>
//     )
// }
