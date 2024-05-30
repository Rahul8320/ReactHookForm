import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Option } from "../../types/option";

const baseUrl = "http://localhost:8080";

export function useStates() {
  return useQuery({
    queryKey: ["states"],
    queryFn: () =>
      axios.get<Option[]>(`${baseUrl}/states`).then((res) => res.data),
  });
}

export function useLanguages() {
  return useQuery({
    queryKey: ["languages"],
    queryFn: () =>
      axios.get<Option[]>(`${baseUrl}/languages`).then((res) => res.data),
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: () =>
      axios.get<Option[]>(`${baseUrl}/skills`).then((res) => res.data),
  });
}

export function useGenders() {
  return useQuery({
    queryKey: ["genders"],
    queryFn: () =>
      axios.get<Option[]>(`${baseUrl}/genders`).then((res) => res.data),
  });
}
